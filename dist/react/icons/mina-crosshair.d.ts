import React from 'react';

export interface MinaCrosshairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCrosshair: React.FC<MinaCrosshairProps>;
export default MinaCrosshair;
