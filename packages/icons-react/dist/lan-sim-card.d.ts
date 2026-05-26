import React from 'react';

export interface LanSimCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCard: React.FC<LanSimCardProps>;
export default LanSimCard;
