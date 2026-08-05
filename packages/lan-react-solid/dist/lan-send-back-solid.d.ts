import React from 'react';

export interface LanSendBackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSendBackSolid(props: LanSendBackSolidProps): React.ReactElement;
export default LanSendBackSolid;
