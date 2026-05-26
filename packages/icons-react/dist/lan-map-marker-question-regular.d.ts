import React from 'react';

export interface LanMapMarkerQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerQuestionRegular: React.FC<LanMapMarkerQuestionRegularProps>;
export default LanMapMarkerQuestionRegular;
