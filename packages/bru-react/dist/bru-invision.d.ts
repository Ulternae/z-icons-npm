import React from 'react';

export interface BruInvisionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruInvision(props: BruInvisionProps): React.ReactElement;
export default BruInvision;
