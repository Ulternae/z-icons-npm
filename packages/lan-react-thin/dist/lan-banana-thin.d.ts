import React from 'react';

export interface LanBananaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBananaThin(props: LanBananaThinProps): React.ReactElement;
export default LanBananaThin;
