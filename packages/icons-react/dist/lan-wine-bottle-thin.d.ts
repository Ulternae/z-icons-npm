import React from 'react';

export interface LanWineBottleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineBottleThin: React.FC<LanWineBottleThinProps>;
export default LanWineBottleThin;
