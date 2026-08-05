import React from 'react';

export interface LanMapMarkerSmileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSmileThin(props: LanMapMarkerSmileThinProps): React.ReactElement;
export default LanMapMarkerSmileThin;
