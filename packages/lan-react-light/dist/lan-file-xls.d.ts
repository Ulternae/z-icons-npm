import React from 'react';

export interface LanFileXlsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXls(props: LanFileXlsProps): React.ReactElement;
export default LanFileXls;
