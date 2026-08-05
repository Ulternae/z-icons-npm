import React from 'react';

export interface LanMapMarkerQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerQuestion(props: LanMapMarkerQuestionProps): React.ReactElement;
export default LanMapMarkerQuestion;
