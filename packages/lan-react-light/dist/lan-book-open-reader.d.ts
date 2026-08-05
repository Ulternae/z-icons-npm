import React from 'react';

export interface LanBookOpenReaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenReader(props: LanBookOpenReaderProps): React.ReactElement;
export default LanBookOpenReader;
