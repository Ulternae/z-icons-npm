import React from 'react';

export interface MinaEditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEdit(props: MinaEditProps): React.ReactElement;
export default MinaEdit;
