import React from 'react';

export interface LanBookTanakhProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookTanakh(props: LanBookTanakhProps): React.ReactElement;
export default LanBookTanakh;
