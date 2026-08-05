import React from 'react';

export interface LanFireExtinguisherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireExtinguisher(props: LanFireExtinguisherProps): React.ReactElement;
export default LanFireExtinguisher;
