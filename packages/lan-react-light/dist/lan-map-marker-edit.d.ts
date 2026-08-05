import React from 'react';

export interface LanMapMarkerEditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerEdit(props: LanMapMarkerEditProps): React.ReactElement;
export default LanMapMarkerEdit;
