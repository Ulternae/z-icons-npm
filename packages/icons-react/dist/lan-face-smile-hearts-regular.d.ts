import React from 'react';

export interface LanFaceSmileHeartsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHeartsRegular: React.FC<LanFaceSmileHeartsRegularProps>;
export default LanFaceSmileHeartsRegular;
