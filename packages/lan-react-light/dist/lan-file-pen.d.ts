import React from 'react';

export interface LanFilePenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePen(props: LanFilePenProps): React.ReactElement;
export default LanFilePen;
