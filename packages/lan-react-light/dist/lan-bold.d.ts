import React from 'react';

export interface LanBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBold(props: LanBoldProps): React.ReactElement;
export default LanBold;
