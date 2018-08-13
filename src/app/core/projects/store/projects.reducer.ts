import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Project } from 'app/shared/models/firestore';

import { ProjectsActionTypes, ProjectsActions } from './projects.actions';

export interface State extends EntityState<Project> {}

export const projectsAdapter = createEntityAdapter<Project>();

export function buildInitialState() {
  return projectsAdapter.getInitialState() as State;
}

export function reducer(state = buildInitialState(), action: ProjectsActions) {
  switch (action.type) {
    case ProjectsActionTypes.AddAll:
      return projectsAdapter.addAll(action.projects as Project[], state);
  }
  return state;
}

export const getProjectsState = createFeatureSelector<State>('projects');

export const { selectIds, selectEntities, selectAll, selectTotal } = projectsAdapter.getSelectors(
  getProjectsState,
);