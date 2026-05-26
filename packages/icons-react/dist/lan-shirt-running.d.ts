import React from 'react';

export interface LanShirtRunningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtRunning: React.FC<LanShirtRunningProps>;
export default LanShirtRunning;
