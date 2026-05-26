import React from 'react';

export interface LanFacePerseveringThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePerseveringThin: React.FC<LanFacePerseveringThinProps>;
export default LanFacePerseveringThin;
