import React from 'react';

export interface LanPersonLimbsWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonLimbsWideThin: React.FC<LanPersonLimbsWideThinProps>;
export default LanPersonLimbsWideThin;
