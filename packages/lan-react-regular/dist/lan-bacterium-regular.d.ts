import React from 'react';

export interface LanBacteriumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteriumRegular(props: LanBacteriumRegularProps): React.ReactElement;
export default LanBacteriumRegular;
