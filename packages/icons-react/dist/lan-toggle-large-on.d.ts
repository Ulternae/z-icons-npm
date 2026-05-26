import React from 'react';

export interface LanToggleLargeOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleLargeOn: React.FC<LanToggleLargeOnProps>;
export default LanToggleLargeOn;
