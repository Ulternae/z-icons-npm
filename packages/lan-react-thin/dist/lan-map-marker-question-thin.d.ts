import React from 'react';

export interface LanMapMarkerQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerQuestionThin(props: LanMapMarkerQuestionThinProps): React.ReactElement;
export default LanMapMarkerQuestionThin;
