import React from 'react';

export interface LanMapMarkerQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerQuestion: React.FC<LanMapMarkerQuestionProps>;
export default LanMapMarkerQuestion;
