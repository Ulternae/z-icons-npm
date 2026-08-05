import React from 'react';

export interface LanFaceRaisedEyebrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceRaisedEyebrow(props: LanFaceRaisedEyebrowProps): React.ReactElement;
export default LanFaceRaisedEyebrow;
