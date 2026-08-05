import React from 'react';

export interface LanStreetViewProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStreetView(props: LanStreetViewProps): React.ReactElement;
export default LanStreetView;
