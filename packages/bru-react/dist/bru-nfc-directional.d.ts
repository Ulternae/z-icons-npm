import React from 'react';

export interface BruNfcDirectionalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNfcDirectional(props: BruNfcDirectionalProps): React.ReactElement;
export default BruNfcDirectional;
