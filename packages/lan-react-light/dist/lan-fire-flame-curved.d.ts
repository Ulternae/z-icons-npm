import React from 'react';

export interface LanFireFlameCurvedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameCurved(props: LanFireFlameCurvedProps): React.ReactElement;
export default LanFireFlameCurved;
