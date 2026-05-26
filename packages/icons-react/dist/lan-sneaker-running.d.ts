import React from 'react';

export interface LanSneakerRunningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerRunning: React.FC<LanSneakerRunningProps>;
export default LanSneakerRunning;
