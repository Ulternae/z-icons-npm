import React from 'react';

export interface LanFaceSmirkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmirking(props: LanFaceSmirkingProps): React.ReactElement;
export default LanFaceSmirking;
