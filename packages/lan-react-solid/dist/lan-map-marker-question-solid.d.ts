import React from 'react';

export interface LanMapMarkerQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerQuestionSolid(props: LanMapMarkerQuestionSolidProps): React.ReactElement;
export default LanMapMarkerQuestionSolid;
