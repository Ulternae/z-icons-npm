import React from 'react';

export interface LanFilePenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePenRegular(props: LanFilePenRegularProps): React.ReactElement;
export default LanFilePenRegular;
