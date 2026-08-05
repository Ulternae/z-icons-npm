import React from 'react';

export interface LanMapMarkerQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerQuestionRegular(props: LanMapMarkerQuestionRegularProps): React.ReactElement;
export default LanMapMarkerQuestionRegular;
