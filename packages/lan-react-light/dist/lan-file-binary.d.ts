import React from 'react';

export interface LanFileBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBinary(props: LanFileBinaryProps): React.ReactElement;
export default LanFileBinary;
