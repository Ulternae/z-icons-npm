import React from 'react';

export interface LanFireExtinguisherThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireExtinguisherThin(props: LanFireExtinguisherThinProps): React.ReactElement;
export default LanFireExtinguisherThin;
