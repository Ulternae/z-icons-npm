import React from 'react';

export interface LanTurntableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurntableThin: React.FC<LanTurntableThinProps>;
export default LanTurntableThin;
