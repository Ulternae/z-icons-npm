import React from 'react';

export interface LanGrateDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrateDroplet: React.FC<LanGrateDropletProps>;
export default LanGrateDroplet;
