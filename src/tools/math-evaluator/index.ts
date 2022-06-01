import { Math } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Math evaluator',
  path: '/math-evaluator',
  description: `Evaluate math expression, like a calculator on steroid (you can use function like sqrt, cos, sin, abs, ...)`,
  keywords: [
    'math',
    'evaluator',
    'acos',
    'acosh',
    'acot',
    'acoth',
    'acsc',
    'acsch',
    'asec',
    'asech',
    'asin',
    'asinh',
    'atan',
    'atan2',
    'atanh',
    'cos',
    'cosh',
    'cot',
    'coth',
    'csc',
    'csch',
    'sec',
    'sech',
    'sin',
    'sinh',
    'tan',
    'tanh',
  ],
  component: () => import('./math-evaluator.vue'),
  icon: Math,
});