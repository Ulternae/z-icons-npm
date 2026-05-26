import React from 'react';

export interface LanFaceGrinBeamSweatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinBeamSweat: React.FC<LanFaceGrinBeamSweatProps>;
export default LanFaceGrinBeamSweat;
