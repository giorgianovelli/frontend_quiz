import {Quiz} from './quiz';

export interface Match {
  questions: Quiz [];
  right_answers: string[];
  // score: string;
  time: string;
  state: string;
}
