import React from 'react';

export interface MinaTwoCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoCircle(props: MinaTwoCircleProps): React.ReactElement;
export default MinaTwoCircle;
