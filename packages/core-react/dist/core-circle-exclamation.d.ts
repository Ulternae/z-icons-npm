import React from 'react';

export interface CoreCircleExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleExclamation(props: CoreCircleExclamationProps): React.ReactElement;
export default CoreCircleExclamation;
