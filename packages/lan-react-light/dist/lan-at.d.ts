import React from 'react';

export interface LanAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAt(props: LanAtProps): React.ReactElement;
export default LanAt;
