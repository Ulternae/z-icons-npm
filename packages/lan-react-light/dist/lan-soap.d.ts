import React from 'react';

export interface LanSoapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoap(props: LanSoapProps): React.ReactElement;
export default LanSoap;
