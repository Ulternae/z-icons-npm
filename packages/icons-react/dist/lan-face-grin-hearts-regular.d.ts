import React from 'react';

export interface LanFaceGrinHeartsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinHeartsRegular: React.FC<LanFaceGrinHeartsRegularProps>;
export default LanFaceGrinHeartsRegular;
