import React from 'react';

export interface MinaLetterROctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterROctagon(props: MinaLetterROctagonProps): React.ReactElement;
export default MinaLetterROctagon;
