import React from 'react';

export interface LanMapMarkerQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerQuestionThin: React.FC<LanMapMarkerQuestionThinProps>;
export default LanMapMarkerQuestionThin;
