import React from 'react';

export interface CoreAngleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleUp(props: CoreAngleUpProps): React.ReactElement;
export default CoreAngleUp;
