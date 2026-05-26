import React from 'react';

export interface LanUfoBeamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoBeamRegular: React.FC<LanUfoBeamRegularProps>;
export default LanUfoBeamRegular;
