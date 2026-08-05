import React from 'react';

export interface LanSimCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCard(props: LanSimCardProps): React.ReactElement;
export default LanSimCard;
