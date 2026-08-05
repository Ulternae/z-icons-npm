import React from 'react';

export interface MinaTargetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTarget(props: MinaTargetProps): React.ReactElement;
export default MinaTarget;
