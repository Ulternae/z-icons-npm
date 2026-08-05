import React from 'react';

export interface MinaClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClipboardSolid(props: MinaClipboardSolidProps): React.ReactElement;
export default MinaClipboardSolid;
