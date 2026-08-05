import React from 'react';

export interface LanAnkhProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnkh(props: LanAnkhProps): React.ReactElement;
export default LanAnkh;
